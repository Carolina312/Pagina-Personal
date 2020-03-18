function inicio() {
    
}
function aparecer(a) {
    category = a.id ;

    if ( category==="uno" ) {
     document.getElementById("espacio").innerHTML = document.getElementById("n1").innerHTML ;

     document.getElementById("s1").style.display = "inline" ;
     document.getElementById("s2").style.display = "none" ;
     document.getElementById("s3").style.display = "none" ;
     document.getElementById("s4").style.display = "none" ;
     
    } else {
        if ( category==="dos" ) { 
            document.getElementById("espacio").innerHTML = document.getElementById("n2").innerHTML ;

            document.getElementById("s2").style.display = "inline" ;
            document.getElementById("s1").style.display = "none" ;
            document.getElementById("s3").style.display = "none" ;
            document.getElementById("s4").style.display = "none" ;

        } else {
            if ( category==="trres" ) {
                document.getElementById("espacio").innerHTML = document.getElementById("n3").innerHTML ;

                document.getElementById("s3").style.display = "inline" ;
                document.getElementById("s2").style.display = "none" ;
                document.getElementById("s1").style.display = "none" ;
                document.getElementById("s4").style.display = "none" ;
            } else {
                if ( category==="cuatrro" ) {
                    document.getElementById("espacio").innerHTML = document.getElementById("n4").innerHTML ;

                    document.getElementById("s4").style.display = "inline" ;
                    document.getElementById("s2").style.display = "none" ;
                    document.getElementById("s3").style.display = "none" ;
                    document.getElementById("s1").style.display = "none" ;
                } else {
                    alert("error") ;
                }
            }
            }
        }
      }  

      