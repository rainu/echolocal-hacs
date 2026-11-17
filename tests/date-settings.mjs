import {build} from "esbuild";
import {pathToFileURL} from "node:url";
import assert from "node:assert/strict";
import {mkdtemp,rm} from "node:fs/promises";
import {tmpdir} from "node:os";
import {join} from "node:path";
const dir=await mkdtemp(join(tmpdir(),"echolocal-date-"));
try {
 const file=join(dir,"layout.mjs");
 await build({entryPoints:["src/layout.ts"],outfile:file,bundle:true,platform:"node",format:"esm"});
 const {settings}=await import(pathToFileURL(file));
 const entity=(name,domain="select",device_id="clock-child")=>({name,slot:0,device_id,entity_id:domain+"."+name,state:"unknown",attributes:{}});
 const entities=[entity("clock_date","switch"),entity("clock_date_format"),entity("clock_date_pattern","text")];
 const state={device:{id:"parent"},entities};
 const sections=settings(state);
 assert.deepEqual(sections[0].rows.map(r=>r.name),["clock_date","clock_date_format","clock_date_pattern"]);
 assert.deepEqual(sections[0].rows.map(r=>r.entityId),entities.map(e=>e.entity_id));
 assert.equal(settings({device:{id:"parent"},entities:[]}).some(s=>s.title==="Dashboard clock"),false);
 // Unrelated sub-device controls do not leak into the device settings.
 assert.deepEqual(settings({device:{id:"parent"},entities:[entity("noise_layer")]}),[]);
 console.log("Date settings: registry identity, child-device grouping, legacy firmware: passed");
} finally {await rm(dir,{recursive:true,force:true})}
