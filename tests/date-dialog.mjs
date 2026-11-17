import {build} from "esbuild";
import {mkdtemp,writeFile,rm} from "node:fs/promises";
import {tmpdir} from "node:os";
import {join} from "node:path";
import {spawnSync} from "node:child_process";
import assert from "node:assert/strict";
const dir=await mkdtemp(join(tmpdir(),"echolocal-dialog-"));
try {
 await build({entryPoints:["src/dialog.ts"],outfile:join(dir,"dialog.js"),bundle:true,format:"iife",loader:{".css":"text"}});
 await writeFile(join(dir,"test.html"),`<script src="dialog.js"></script><body><script>
 (async()=>{
 try {
 const calls=[];
 const el=document.createElement("echolocal-dialog");
 const ids=["switch.visibility","select.format","text.pattern"];
 el.hass={states:{
 [ids[0]]:{state:"on",attributes:{}},
 [ids[1]]:{state:"Custom",attributes:{options:["Language default","dd.MM.yyyy","Custom"]}},
 [ids[2]]:{state:"dd.MM.yyyy",attributes:{max:128}},
 },callService:async(...args)=>calls.push(args)};
 el.sections=[{title:"Dashboard clock",rows:ids.map((entityId,i)=>({entityId,name:["clock_date","clock_date_format","clock_date_pattern"][i],label:["Show date","Date format","Custom date pattern"][i]}))}];
 document.body.append(el);await el.updateComplete;
 const root=el.shadowRoot;
 const input=root.querySelector("input");
 if(input.value!=="dd.MM.yyyy")throw Error("saved pattern not rendered");
 input.value="yyyy-MM-dd";input.dispatchEvent(new Event("change"));
 await Promise.resolve();
 const select=root.querySelector("ha-control-select-menu");
 select.dispatchEvent(new CustomEvent("wa-select",{detail:{item:{value:"dd.MM.yyyy"}}}));
 const toggle=root.querySelector("ha-control-switch");
 if(!toggle)throw Error("visibility control missing");
 toggle.checked=false;toggle.dispatchEvent(new Event("change"));
 if(!calls.some(c=>c[0]==="text"&&c[1]==="set_value"&&c[2].value==="yyyy-MM-dd"))throw Error("text command missing");
 if(!calls.some(c=>c[0]==="select"&&c[2].option==="dd.MM.yyyy"))throw Error("preset command missing");
 if(!calls.some(c=>c[0]==="switch"&&c[1]==="turn_off"&&c[2].entity_id===ids[0]))throw Error("independent visibility command missing");
 if(!root.textContent.includes("Show date stays independent"))throw Error("help missing");
 document.body.dataset.result="PASS";
 }catch(e){document.body.dataset.result="FAIL: "+e.message}
 })();
 </script>`);
 const result=spawnSync("chromium",["--headless","--no-sandbox","--disable-gpu","--disable-dev-shm-usage","--no-first-run","--user-data-dir="+join(dir,"profile"),"--virtual-time-budget=3000","--dump-dom","file://"+join(dir,"test.html")],{encoding:"utf8",timeout:30000,maxBuffer:2000000});
 assert.match(result.stdout,/data-result="PASS"/,result.stdout+"\n"+result.stderr);
 console.log("Browser: saved pattern renders; custom and preset service calls pass");
}finally{await rm(dir,{recursive:true,force:true})}
