var Principal;
var Rate;
var N;
var EMI;
var m_prin
var m_intrest
var remaing_bal;
var c=0;
var p_valid;
var t_valid;
var a_valid;
function P_valid()
{
    var pa=document.getElementById("P").value;
    var len=pa.length;
    var last_char=pa.charAt(len-1);
    var asci_v=last_char.charCodeAt();
    if(pa=="")
    {
       p_valid=false;
    }
    else
    {
       if(asci_v<48||asci_v>57)
      {
        document.getElementById("P").value=pa.slice(0,-1);
      }
      else
      {
         p_valid=true;
      }
    }
}
function A_valid()
{
   var annual=document.getElementById("R").value;
   var len=annual.length;
   var last_char=annual.charAt(len-1);
   var asci_v=last_char.charCodeAt();
     if(annual=="")
    {
       a_valid=false;
    }
    else
    {
       if(asci_v<48||asci_v>57)
      {
        document.getElementById("R").value=annual.slice(0,-1);
      }
      else
      {
         a_valid=true;
      }
    }
}
function T_valid()
{
        var tenure=document.getElementById("N").value;
        var len=tenure.length;
        var last_char=tenure.charAt(len-1);
        var asci_v=last_char.charCodeAt();
      if(tenure=="")
    {
       t_valid=false;
    }
    else
    {
       if(asci_v<48||asci_v>57)
      {
        document.getElementById("N").value=tenure.slice(0,-1);
      }
      else
      {
         t_valid=true;
      }
    }
}
function submit()
{
    if(c>0)
    {
        document.getElementById("container").innerHTML="";
    }
    Principal=parseFloat(document.getElementById("P").value );
    Rate=parseFloat(document.getElementById("R").value/1200);
    N=parseFloat(document.getElementById("N").value*12);
    EMI=parseFloat(Principal*Rate*Math.pow((1+Rate),N)/(Math.pow((1+Rate),N)-1));
    document.getElementById("m_emi").innerText=EMI.toFixed(2);
    document.getElementById("t_intrest").innerText=((EMI*N)-Principal).toFixed(2);
    document.getElementById("t_payment").innerText=(EMI*N).toFixed(2);
    remaing_bal=Principal;
    var container=document.getElementById("container");
    var table=document.createElement("table");
    table.style.border="1px solid black";
    table.style.borderCollapse="collapse";
    var arr=["MONTH","EMI","PRINCIPAL","INTREST","BALANCE"];
     var tr=document.createElement("tr");
    for(k=0;k<5;k++)
    {
        var th=document.createElement("th");
        th.innerText=arr[k];
        th.style.paddingLeft="30px";
        th.style.paddingRight="30px";
        th.style.border="1px solid black";
        tr.appendChild(th);
    }
        table.appendChild(tr);
    for(i=0;i<N;i++)
    {
        m_prin=EMI-(remaing_bal*Rate);
        m_intrest=remaing_bal*Rate;
        remaing_bal=remaing_bal-m_prin;
       var tr=document.createElement("tr");
       for(j=0;j<5;j++)
       {   
           var td=document.createElement("td");
            td.style.padding="10px";
            td.style.border="1px solid black";
            var data=[i+1,EMI.toFixed(2),m_prin.toFixed(2),m_intrest.toFixed(2),remaing_bal.toFixed(2)];
            td.innerText=data[j];
           tr.appendChild(td);
       }
       table.appendChild(tr);
    }
       container.appendChild(table);
      //  table.innerHTML=" ";
    c++;
}