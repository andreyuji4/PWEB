function escolha(){

    let usuario = document.getElementById("opcao");
    let computador;
    let CompVal;


    CompVal = Math.random();

    if (CompVal <= 0.33){
        computador = "Pedra";
    }

    else if (CompVal < 0.67){
        computador = "Tesoura";
    }

    else {
        computador = "Papel";
    }

    if (computador == escolhauser.value){
        alert("Empate, a IA jogou "  + computador);
    }
        else if (computador == "Papel" && usuario.value == "Tesoura"){
            alert("Vitória, a IA jogou " + computador);
        }
            else if (computador == "Papel" && usuario.value == "Pedra"){
                alert("Derrota, a IA jogou " + computador);
            }
                else if (computador == "Pedra" && usuario.value == "Tesoura"){
                    alert("Derrota, a IA jogou " + computador);
                }
                    else if (computador == "Tesoura" && usuario.value == "Papel"){
                        alert("Derrota, a IA jogou " + computador);
                    }
                        else if (computador == "Pedra" && usuario.value == "Papel"){
                            alert("Vitória, a IA jogou " + computador);
                        }
                            else if (computador == "Tesoura" && usuario.value == "Pedra"){
                                alert("Vitória, a IA jogou " + computador);
                            }
}