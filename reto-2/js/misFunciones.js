function traerlibreria(){
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarLibreria(respuesta.items)
        }
    
    });

}

function pintarLibreria(items){

    let myTable ="<table>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].target+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarLibreria("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultadolibreria").append(myTable);
}

function guardarlibreria(){
    let myData={
        id:$("#id").val(),
        target:$("#target").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadolibreria").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerlibreria();
            alert("se ha guardado el dato");  
        }
    });
}

function editarlibreria(){
    let myData={
        id:$("#id").val(),
        target:$("#target").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadolibreria").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerlibreria();
            alert("se ha Actualizado");  
        }
    });
}

function borrarLibreria(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/library/library",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            traerlibreria();
            alert("se ha Eliminado");  
        }
    });
}

//Sección Clientes
function traerClientes(){
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarClientes(respuesta.items)
        }
    
    });

}

function pintarClientes(items){

    let myTable ="<table>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarClientes("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultadoclientes").append(myTable);
}

function guardarClientes(){
    let myData={
        id:$("#cid").val(),
        name:$("#cname").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclientes").empty();
            $("#cid").val("");
            $("#cname").val("");
            $("#email").val("");
            $("#age").val("");
            traerClientes();
            alert("se ha guardado el dato");  
        }
    });
}

function editarClientes(){
    let myData={
        id:$("#cid").val(),
        name:$("#cname").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclientes").empty();
            $("#cid").val("");
            $("#cname").val("");
            $("#email").val("");
            $("#age").val("");
            traerClientes();
            alert("se ha Actualizado");  
        }
    });
}

function borrarClientes(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            traerClientes();
            alert("se ha Eliminado");  
        }
    });
}


//Sección mensaje
function traerMensaje(){
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarMensaje(respuesta.items)
        }
    
    });

}

function pintarMensaje(items){

    let myTable ="<table>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].mensajetext+"</td>";
        myTable+="<td> <button onclick='borrarMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultadomensaje").append(myTable);
}

function guardarMensaje(){
    let myData={
        id:$("#mid").val(),
        mensajetext:$("#mensajetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomensaje").empty();
            $("#mid").val("");
            $("#mensajetext").val("");
            traerMensaje();
            alert("se ha guardado el dato");  
        }
    });
}

function editarMensaje(){
    let myData={
        id:$("#mid").val(),
        mensajetext:$("#mensajetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomensaje").empty();
            $("#mid").val("");
            $("#mensajetext").val("");
            traerMensaje();
            alert("se ha Actualizado");  
        }
    });
}

function borrarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7d005e201fad33-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            traerMensaje();
            alert("se ha Eliminado");  
        }
    });
}