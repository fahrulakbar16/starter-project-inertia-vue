import{y as p,d as x,e as o,o as r,b as P,a as e,g as U,D as ee,f as S,w as te,h as I,P as ae,t as n,n as N,E as C,F as b,i as y,V as B,G as se,J as ne}from"./app-CJkCV51W.js";import{_ as oe}from"./AppLayout-BlEKf3Fz.js";import{_ as re}from"./Breadcrumb-BJQpsGcc.js";import"./FlashMessage-D4C-FUm8.js";import"./LayoutShell-FWpWJLvi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useAuth-DvuTgkfF.js";import"./LayoutShell.vue_vue_type_style_index_0_lang-CRqqKi3W.js";const ie={class:"flex overflow-hidden flex-col gap-3 px-3 h-full"},le={class:"flex justify-between items-center h-10"},de={class:"space-y-5 overflow-hidden rounded-lg border border-gray-200 bg-white px-10 py-6 dark:border-gray-700 dark:bg-white/[0.03]"},ce={class:"flex items-center justify-between"},ge={class:"font-bold text-sky-400 md:text-xl"},ue={class:"flex items-center gap-3"},pe={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},me={class:"font-semibold text-gray-800 dark:text-gray-200"},be={class:"font-semibold text-gray-800 dark:text-gray-200"},ye={class:"font-semibold text-gray-800 dark:text-gray-200"},ve={class:"font-semibold text-gray-800 dark:text-gray-200"},xe={class:"font-semibold text-gray-800 dark:text-gray-200"},fe={class:"font-semibold text-gray-800 dark:text-gray-200"},he={class:"font-semibold text-gray-800 dark:text-gray-200"},ke={class:"font-semibold text-gray-800 dark:text-gray-200"},_e={class:"font-semibold text-gray-800 dark:text-gray-200"},we={class:"font-semibold text-gray-800 dark:text-gray-200"},Se={class:"font-semibold text-gray-800 dark:text-gray-200"},Ce={class:"font-semibold text-gray-800 dark:text-gray-200"},$e={class:"bg-white rounded-lg border border-gray-200"},je={class:"px-6 py-4 border-b"},Te={class:"flex gap-4"},De=["onClick"],Le={class:"p-4 space-y-3"},Pe={class:"flex flex-col gap-2 md:flex-row md:items-center md:justify-between"},Ie={class:"flex gap-2 items-center"},Ne=["value"],ze={class:"overflow-auto max-h-[500px]","data-simplebar":""},Ee={key:0,class:"min-w-full text-sm"},Me={class:"font-medium text-center text-gray-600"},Oe={class:"p-3 text-center"},Ae={class:"p-3"},Ue={class:"p-3"},Be={class:"flex flex-col gap-1"},Ve=["href"],Ke={key:1},Fe=["colspan"],He={key:1,class:"min-w-full text-sm"},Qe={class:"p-3 text-center"},Re={class:"p-3"},Je={class:"p-3"},We={class:"p-3"},Ye={class:"p-3"},Ge={key:0,class:"flex items-center gap-2"},Xe=["src","onClick"],Ze=["href"],qe={key:1,class:"text-gray-400"},et={class:"p-3"},tt={key:0,class:"text-sm"},at={key:1,class:"text-gray-400"},st={key:1},nt={key:0,class:"flex justify-center items-center gap-2 mt-4"},ot=["disabled"],rt={class:"text-sm text-gray-600"},it=["disabled"],lt={class:"p-4"},dt={class:"overflow-auto","data-simplebar":""},ct={class:"min-w-full text-sm"},gt={class:"p-3 text-center"},ut={class:"p-3"},pt={class:"p-3"},mt={class:"p-3"},bt={class:"p-3"},yt={class:"p-3"},vt=["src"],xt={key:1,class:"text-gray-400"},ft={key:1},ht={class:"relative max-w-4xl max-h-[90vh]"},kt=["src"],_t={components:{InfoRow:{props:{label:String,value:[String,Number,null]},template:`
            <div>
              <label class='block mb-1 text-sm text-gray-600'>{{ label }}</label>
              <div class='p-2 min-h-[40px] rounded border bg-gray-50 text-gray-800'>{{ value ?? '-' }}</div>
            </div>`}}},Pt=Object.assign(_t,{layout:oe},{__name:"Show",props:{inspection:Object,general:Object,questions:{type:Array,default:()=>[]},activities:{type:Array,default:()=>[]},approvals:{type:Array,default:()=>[]}},setup(d){const l=d,V=[{label:"Menu Utama"},{label:"Inspeksi",href:route("inspections.index")},{label:`${l.general?.inspection_number}`}],$=p(()=>l.general?.category?.toLowerCase()==="kendaraan"),j=p(()=>{if(!$.value)return[];const s=new Map;return(l.questions||[]).forEach(t=>{t.employee_id&&t.employee_name&&s.set(t.employee_id,{id:t.employee_id,name:t.employee_name})}),Array.from(s.values())}),z=p(()=>{if(!$.value)return[];const s=new Map;return(l.questions||[]).forEach(t=>{s.has(t.question_id)||s.set(t.question_id,{question_id:t.question_id,title:t.title,category:t.category,answers:[]}),s.get(t.question_id).answers.push({employee_id:t.employee_id,employee_name:t.employee_name,answer:t.answer,attachment:t.attachment,note:t.note})}),Array.from(s.values())});function K(s,t){return s.answers.find(i=>i.employee_id===t)?.answer||"-"}function E(s,t){return s.answers.find(i=>i.employee_id===t)?.attachment||null}p(()=>{const s={};return(l.questions||[]).forEach(t=>{const a=t.category||"Umum";s[a]||(s[a]=[]),s[a].push(t)}),Object.entries(s).map(([t,a])=>({category:t,items:a}))});const M=p(()=>(l.questions||[]).map(s=>({title:s.title,category:s.category,answer:s.answer,note:s.note,attachment:s.attachment||null}))),f=x(""),h=x(""),m=x(1),T=10,F=p(()=>{const s=new Set((M.value||[]).map(t=>t.category).filter(Boolean));return Array.from(s).sort()}),O=p(()=>{let s=M.value||[];if(h.value&&(s=s.filter(t=>(t.category||"")===h.value)),f.value){const t=f.value.toLowerCase();s=s.filter(a=>String(a.title).toLowerCase().includes(t)||String(a.answer??"").toLowerCase().includes(t))}return s}),k=p(()=>Math.ceil(O.value.length/T)),D=p(()=>{const s=(m.value-1)*T,t=s+T;return O.value.slice(s,t)});function H(s){return s?[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"].some(a=>s.toLowerCase().includes(a)):!1}const _=x(null);function Q(s){_.value=s}function A(){_.value=null}function R(){const s={};(l.questions||[]).forEach(g=>{const c=g.employee_name||l.general.submitted_by||"Karyawan";s[c]||(s[c]={});const u=g.category||"Umum";s[c][u]||(s[c][u]=[]),s[c][u].push(g)});let t="";Object.entries(s).forEach(([g,c])=>{t+=`
            <div class="employee-section">
                <h2 class="employee-name">${g}</h2>
        `,Object.entries(c).forEach(([u,Z])=>{t+=`
                <div class="category-section">
                    <h3 class="category-title">${u}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th style="width: 5%;">No</th>
                                <th style="width: 40%;">Pertanyaan</th>
                                <th style="width: 20%;">Jawaban</th>
                                <th style="width: 35%;">Tindak Lanjut</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Z.map((L,q)=>`
                                <tr>
                                    <td>${q+1}</td>
                                    <td>${L.title||"-"}</td>
                                    <td>${L.answer||"-"}</td>
                                    <td>${L.note||"-"}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            `}),t+=`
                <div class="signature-section">
                    <div class="signature-box">
                        <p class="signature-label">Nama:</p>
                        <p class="signature-name">${g}</p>
                        <p class="signature-label" style="margin-top: 60px;">Tanda Tangan:</p>
                        <div class="signature-line"></div>
                    </div>
                </div>
            </div>
            <div class="page-break"></div>
        `});const a=window.open("","_blank"),i=`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Inspeksi ${l.general.inspection_number}</title>
            <style>
                @media print {
                    @page { margin: 1cm; }
                    body { margin: 0; }
                    .page-break { page-break-after: always; }
                }
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: Arial, sans-serif; padding: 20px; }
                .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #0ea5e9; padding-bottom: 20px; }
                .logo { font-size: 28px; font-weight: bold; color: #0ea5e9; margin-bottom: 5px; }
                .subtitle { font-size: 14px; color: #666; }
                .title { font-size: 20px; font-weight: bold; margin: 20px 0; color: #333; }
                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
                .info-item { padding: 10px; background: #f8f9fa; border-left: 3px solid #0ea5e9; }
                .info-label { font-size: 12px; color: #666; margin-bottom: 5px; }
                .info-value { font-size: 14px; font-weight: 600; color: #333; }

                .employee-section { margin-bottom: 40px; }
                .employee-name { font-size: 18px; font-weight: bold; color: #0ea5e9; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #0ea5e9; }
                .category-section { margin-bottom: 25px; }
                .category-title { font-size: 16px; font-weight: bold; color: #333; margin-bottom: 10px; background: #f0f9ff; padding: 8px 12px; border-left: 4px solid #0ea5e9; }

                table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 15px; }
                th { background: #0ea5e9; color: white; padding: 12px; text-align: left; font-size: 13px; }
                td { padding: 10px; border-bottom: 1px solid #ddd; font-size: 12px; }
                tr:hover { background: #f8f9fa; }

                .signature-section { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; }
                .signature-box { max-width: 300px; }
                .signature-label { font-size: 12px; color: #666; margin-bottom: 5px; }
                .signature-name { font-size: 14px; font-weight: 600; color: #333; margin-bottom: 10px; }
                .signature-line { border-bottom: 2px solid #333; margin-top: 10px; }

                .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #666; border-top: 2px solid #0ea5e9; padding-top: 15px; }
                .page-break { page-break-after: always; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">HENSKRISTAL</div>
                <div class="subtitle">Ice Solution - BackOffice Website</div>
            </div>

            <div class="title">Laporan Inspeksi ${l.general.inspection_number}</div>

            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Nomor Inspeksi</div>
                    <div class="info-value">${l.general.inspection_number||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">No. SOP</div>
                    <div class="info-value">${l.general.sop_code||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Checklist</div>
                    <div class="info-value">${l.general.checklist_name||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Kategori</div>
                    <div class="info-value">${l.general.category||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Tipe Pengecekan</div>
                    <div class="info-value">${l.general.inspection_type||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Target Pengecekan</div>
                    <div class="info-value">${l.general.inspection_target||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Dibuat Oleh</div>
                    <div class="info-value">${l.general.submitted_by||"-"}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Tanggal Dibuat</div>
                    <div class="info-value">${v(l.general.created_at)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Tanggal Inspeksi</div>
                    <div class="info-value">${v(l.general.submit_date)}</div>
                </div>
            </div>

            <div class="page-break"></div>

            ${t}

            <div class="footer">
                <p>© ${new Date().getFullYear()} Henskristal Ice Solution - BackOffice Website</p>
                <p>Dicetak pada: ${v(new Date().toISOString())}</p>
            </div>
        </body>
        </html>
    `;a.document.write(i),a.document.close(),setTimeout(()=>{a.print()},250)}function J(){const s=[["No","Pertanyaan","Kategori","Jawaban","Lampiran","Tindak Lanjut"]];(D.value||[]).forEach((c,u)=>{s.push([String(u+1),String(c.title||""),String(c.category||""),String(c.answer??""),c.attachment?"Ada":"-",String(c.note||"-")])});const t=s.map(c=>c.map(u=>'"'+String(u).replace(/"/g,'""')+'"').join(",")).join(`
`),a=new Blob([t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(a),g=document.createElement("a");g.href=i,g.download=`inspection_${l.general?.inspection_number||l.inspection?.id}_questions.csv`,g.click(),URL.revokeObjectURL(i)}const W=[{value:"questions",label:"Daftar Pertanyaan"},{value:"approvals",label:"Persetujuan"}],w=x("questions");function v(s){if(!s)return"-";const t=new Date(s);if(isNaN(t.getTime()))return String(s);const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),g=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),u=String(t.getMinutes()).padStart(2,"0");return`${a}-${i}-${g} ${c}.${u}`}function Y(s){return{draft:"bg-gray-100 text-gray-700",submitted:"bg-amber-100 text-amber-800",approved:"bg-green-100 text-green-700",rejected:"bg-red-100 text-red-700"}[s]||"bg-gray-100 text-gray-700"}function G(s){return{on_progress:"Menunggu Persetujuan",approved:"Disetujui",rejected:"Ditolak",canceled:"Dibatalkan",partial_approved:"Disetujui Sebagian"}[s]??s}function X(s){return{"Belum Selesai":"bg-gray-100 text-gray-600 dark:bg-gray-500/20 dark:text-gray-300",Selesai:"bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",Disetujui:"bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",Ditolak:"bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300"}[s]||"bg-gray-100 text-gray-600"}return(s,t)=>(r(),o(b,null,[P(U(ee),{title:`Detail Inspeksi #${d.inspection.inspection_number}`},null,8,["title"]),e("div",ie,[e("div",le,[P(re,{items:V}),P(U(ae),{href:s.route("inspections.index"),class:"px-3 py-2 text-sm text-gray-700 rounded border"},{default:te(()=>[...t[4]||(t[4]=[I("Kembali",-1)])]),_:1},8,["href"])]),e("div",de,[e("div",ce,[e("div",ge," Detail "+n(d.general.inspection_number),1),e("div",ue,[e("button",{onClick:R,class:"flex items-center gap-2 px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded transition-colors"},[...t[5]||(t[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),I(" Print ",-1)])]),e("span",{class:N([X(d.general.status),"px-2.5 py-1 text-xs font-medium rounded-full"])},n(G(d.general.status)),3)])]),e("div",pe,[e("div",null,[t[6]||(t[6]=e("div",{class:"text-sm text-gray-600"},"Nomor Inspeksi",-1)),e("div",me,n(d.general.inspection_number??"-"),1)]),e("div",null,[t[7]||(t[7]=e("div",{class:"text-sm text-gray-600"},"No. SOP",-1)),e("div",be,n(d.general.sop_code??"-"),1)]),e("div",null,[t[8]||(t[8]=e("div",{class:"text-sm text-gray-600"},"Departemen",-1)),e("div",ye,n(d.general.department??"-"),1)]),e("div",null,[t[9]||(t[9]=e("div",{class:"text-sm text-gray-600"},"Checklist",-1)),e("div",ve,n(d.general.checklist_name??"-"),1)]),e("div",null,[t[10]||(t[10]=e("div",{class:"text-sm text-gray-600"},"Cabang",-1)),e("div",xe,n(d.general.location??"-"),1)]),e("div",null,[t[11]||(t[11]=e("div",{class:"text-sm text-gray-600"},"Kategori Checklist",-1)),e("div",fe,n(d.general.category??"-"),1)]),e("div",null,[t[12]||(t[12]=e("div",{class:"text-sm text-gray-600"},"Tipe Pengecekan",-1)),e("div",he,n(d.general.inspection_type??"-"),1)]),e("div",null,[t[13]||(t[13]=e("div",{class:"text-sm text-gray-600"},"Target Pengecekan",-1)),e("div",ke,n(d.general.inspection_target??"-"),1)]),e("div",null,[t[14]||(t[14]=e("div",{class:"text-sm text-gray-600"},"Dibuat Oleh",-1)),e("div",_e,n(d.general.submitted_by??"-"),1)]),e("div",null,[t[15]||(t[15]=e("div",{class:"text-sm text-gray-600"},"Tanggal Dibuat",-1)),e("div",we,n(v(d.general.created_at)),1)]),e("div",null,[t[16]||(t[16]=e("div",{class:"text-sm text-gray-600"},"Tanggal Inspeksi",-1)),e("div",Se,n(v(d.general.submit_date)),1)]),e("div",null,[t[17]||(t[17]=e("div",{class:"text-sm text-gray-600"},"Catatan",-1)),e("div",Ce,n(d.general.remarks??"-"),1)])])]),e("div",$e,[e("div",je,[e("div",Te,[(r(),o(b,null,y(W,a=>e("button",{key:a.value,type:"button",onClick:i=>w.value=a.value,class:N(["px-3 py-2 text-sm rounded",w.value===a.value?"bg-sky-100 text-sky-700":"text-gray-600 hover:bg-gray-50 border"])},n(a.label),11,De)),64))])]),C(e("div",Le,[e("div",Pe,[e("div",Ie,[C(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>f.value=a),type:"text",placeholder:"Cari pertanyaan...",class:"px-3 w-64 h-9 text-sm rounded border border-gray-300 focus:border-sky-400 focus:ring-sky-200"},null,512),[[se,f.value]]),C(e("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>h.value=a),class:"px-2 h-9 text-sm rounded border border-gray-300 focus:border-sky-400 focus:ring-sky-200"},[t[18]||(t[18]=e("option",{value:""},"Semua Kategori",-1)),(r(!0),o(b,null,y(F.value,a=>(r(),o("option",{key:a,value:a},n(a),9,Ne))),128))],512),[[ne,h.value]])]),e("div",{class:"flex gap-2 items-center"},[e("button",{type:"button",onClick:J,class:"px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"}," Unduh CSV ")])]),e("div",ze,[$.value?(r(),o("table",Ee,[e("thead",null,[e("tr",null,[t[19]||(t[19]=e("th",{class:"sticky top-0 p-3 bg-gray-100 border-gray-200 border-y"},[e("div",{class:"font-medium text-center text-gray-600"},"No")],-1)),t[20]||(t[20]=e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"},"Pertanyaan")],-1)),t[21]||(t[21]=e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"},"Kategori")],-1)),(r(!0),o(b,null,y(j.value,(a,i)=>(r(),o("th",{key:i,class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",Me," Jawaban "+n(a.name),1)]))),128))])]),e("tbody",null,[z.value.length?(r(!0),o(b,{key:0},y(z.value,(a,i)=>(r(),o("tr",{key:i,class:"border-b border-gray-200"},[e("td",Oe,n(i+1),1),e("td",Ae,n(a.title),1),e("td",Ue,n(a.category||"-"),1),(r(!0),o(b,null,y(j.value,(g,c)=>(r(),o("td",{key:c,class:"p-3 text-center"},[e("div",Be,[e("span",null,n(K(a,g.id)),1),E(a,g.id)?(r(),o("a",{key:0,href:E(a,g.id),target:"_blank",class:"text-xs text-blue-600 hover:underline"}," 📎 Lampiran ",8,Ve)):S("",!0)])]))),128))]))),128)):(r(),o("tr",Ke,[e("td",{colspan:3+j.value.length,class:"py-6 text-center text-gray-500"}," Tidak ada pertanyaan ",8,Fe)]))])])):(r(),o("table",He,[t[24]||(t[24]=e("thead",null,[e("tr",null,[e("th",{class:"sticky top-0 p-3 bg-gray-100 border-gray-200 border-y"},[e("div",{class:"font-medium text-center text-gray-600"}," No ")]),e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Pertanyaan ")]),e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Kategori ")]),e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Jawaban ")]),e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Lampiran ")]),e("th",{class:"sticky top-0 p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Tindak Lanjut ")])])],-1)),e("tbody",null,[D.value.length?(r(!0),o(b,{key:0},y(D.value,(a,i)=>(r(),o("tr",{key:i,class:"border-b border-gray-200"},[e("td",Qe,n(i+1),1),e("td",Re,n(a.title),1),e("td",Je,n(a.category||"-"),1),e("td",We,n(a.answer??"-"),1),e("td",Ye,[a.attachment?(r(),o("div",Ge,[H(a.attachment)?(r(),o("img",{key:0,src:a.attachment,alt:"Lampiran",class:"w-16 h-16 object-cover rounded border cursor-pointer",onClick:g=>Q(a.attachment)},null,8,Xe)):S("",!0),e("a",{href:a.attachment,target:"_blank",class:"text-xs text-blue-600 hover:underline flex items-center gap-1"},[...t[22]||(t[22]=[e("i",{class:"lni lni-paperclip"},null,-1),I(" Lihat Lampiran ",-1)])],8,Ze)])):(r(),o("span",qe,"-"))]),e("td",et,[a.note?(r(),o("span",tt,n(a.note),1)):(r(),o("span",at,"-"))])]))),128)):(r(),o("tr",st,[...t[23]||(t[23]=[e("td",{colspan:"6",class:"py-6 text-center text-gray-500"}," Tidak ada pertanyaan ",-1)])]))])]))]),k.value>1?(r(),o("div",nt,[e("button",{onClick:t[2]||(t[2]=a=>m.value=Math.max(1,m.value-1)),disabled:m.value===1,class:"px-3 py-1 text-sm rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"}," Sebelumnya ",8,ot),e("span",rt," Halaman "+n(m.value)+" dari "+n(k.value),1),e("button",{onClick:t[3]||(t[3]=a=>m.value=Math.min(k.value,m.value+1)),disabled:m.value===k.value,class:"px-3 py-1 text-sm rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"}," Selanjutnya ",8,it)])):S("",!0)],512),[[B,w.value==="questions"]]),C(e("div",lt,[e("div",dt,[e("table",ct,[t[26]||(t[26]=e("thead",null,[e("tr",null,[e("th",{class:"p-3 bg-gray-100 border-gray-200 border-y"},[e("div",{class:"font-medium text-center text-gray-600"}," No ")]),e("th",{class:"p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Step ")]),e("th",{class:"p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," PIC ")]),e("th",{class:"p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Status ")]),e("th",{class:"p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Tanggal ")]),e("th",{class:"p-3 bg-gray-100 border border-gray-200"},[e("div",{class:"font-medium text-left text-gray-600"}," Tanda Tangan ")])])],-1)),e("tbody",null,[d.approvals&&d.approvals.length?(r(!0),o(b,{key:0},y(d.approvals,(a,i)=>(r(),o("tr",{key:i,class:"border-b border-gray-200"},[e("td",gt,n(i+1),1),e("td",ut,n(a.step),1),e("td",pt,n(a.pic||"-"),1),e("td",mt,[e("span",{class:N([Y(a.status),"px-2 py-0.5 text-xs font-medium rounded-full"])},n(a.status),3)]),e("td",bt,n(v(a.date)),1),e("td",yt,[a.signature_url?(r(),o("img",{key:0,src:a.signature_url,alt:"signature",class:"h-10"},null,8,vt)):(r(),o("span",xt,"-"))])]))),128)):(r(),o("tr",ft,[...t[25]||(t[25]=[e("td",{colspan:"6",class:"py-6 text-center text-gray-500"}," Belum ada persetujuan ",-1)])]))])])])],512),[[B,w.value==="approvals"]])]),_.value?(r(),o("div",{key:0,onClick:A,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"},[e("div",ht,[e("button",{onClick:A,class:"absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"}," × "),e("img",{src:_.value,alt:"Preview",class:"max-w-full max-h-[90vh] object-contain"},null,8,kt)])])):S("",!0)])],64))}});export{Pt as default};
