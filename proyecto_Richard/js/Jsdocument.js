function traerlibreria(){
    $.ajax({
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
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
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultadoclientes").append(myTable);
}

function pintarClientesPorId(campoId){
    if(campoId.val() == ""){
        alert("El Campo ID es obligatorio")
    }
    else{
        var id = campoId.val()
        $.ajax(
            {
                url: 'https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client/'+id,
                type: 'GET',
                dataType: 'json',
                success: function (json) {
                    $("#resultadoclientes").empty();
                    if(json.items.length == 0){
                        alert("Error inesperado")
                        campoId.val("")
                        
                    }
                    else{
                        tabla = "<center><table border='0'><tr><th>ID<th>Nombre<th>E-mail<th>Edad"
                        myTable = ""
                        for (i=0;i<items.length;i++){
                            myTable+="<tr>";
                            myTable+="<td>"+items[i].id+"</td>";
                            myTable+="<td>"+items[i].name+"</td>";
                            myTable+="<td>"+items[i].email+"</td>";
                            myTable+="<td>"+items[i].age+"</td>";
                            myTable+="</tr>";
                        }
                        myTable+="</table>";
                        $("#resultadoclientes").append(myTable);
                    }
                   
                },
                complete: function (xhr, status) {
                    alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                }

            }

        )
    }
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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
        url:"https://g6bc0290598e0c4-library.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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