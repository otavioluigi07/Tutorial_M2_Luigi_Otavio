$("#login").on("submit", function (e) {
    e.preventDefault();

        let data = {
            email: $("#email").val(),
            password: $("#password").val(),

        };

        if (data.email == "" || data.password == ""){
            alert("Preencha todos os campos");
            return;
        }

        $.ajax({
            async:false,
            method: "POST",
            url: "index.html",
            data:data,
            
        }).done(() => {
            console.log("REQUISIÇÃO COM SUCESSO")
            window.location.href = "..\main\index.html";
        }).fail(() => {
            console.log("ERRO NA REQUISIÇÃO");
        }).always(() => {
            console.log("REQUISIÇÃO FINALIZADA");
        });
});