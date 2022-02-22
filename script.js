let version = 'user';

window.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('logo').addEventListener('click', () => {
    //     window.location.href='index.html';
    // });

    // document.getElementById('logo2').addEventListener('click', () => {
    //     window.location.href='index2.html';
    // });

    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('hideMenu');
        document.getElementById('menu').classList.toggle('showMenu');
    });
    
    document.getElementById('logout').addEventListener('click', () => {
        window.location.href='frontpage.html';
    });
    
    document.getElementById('alta').addEventListener('click', () => {
        window.location.href='alta.html';
    });
    
    document.getElementById('statistics').addEventListener('click', () => {
        window.location.href='estadisticas.html';
    });

   let theStates = document.getElementsByClassName('states');

   for (let index = 0; index < theStates.length; index++) {
        theStates[index].addEventListener("click", (e) => {
            for (let j = 0; j < theStates.length; j++) {
                theStates[j].classList.remove("border-primary");
                theStates[j].classList.remove("bold");
            }
            console.log(`Clickou en: ${e.target.id}`);
            document.getElementById(`${e.target.id}`).classList.add("border-primary");
            document.getElementById(`${e.target.id}`).classList.add("bold");
        });
    }

    

    document.getElementById('version').addEventListener('click', () => {
        if (document.getElementById('version').innerText == 'Cambiar a versión administrador') {
            document.getElementById('version').innerText = 'Cambiar a versión usuario';
            document.getElementById('version').href = 'index2.html';
            //ADMIN:
            version = 'admin';
            document.getElementById('alta').classList.remove('hidden');
        } else if (document.getElementById('version').innerText == 'Cambiar a versión usuario') {
            document.getElementById('version').innerText = 'Cambiar a versión administrador';
            document.getElementById('version').href = 'index.html';
            //USER:
            version = 'user';
            document.getElementById('alta').classList.add('hidden');
        }
    });


//     let thePatients = document.getElementsByClassName('imgindex');

//    for (let index = 0; index < thePatients.length; index++) {
//     thePatients[index].addEventListener("click", () => {
//             if (version == 'admin') {
//                 document.getElementById('edit').classList.remove('hidden');
//                 console.log('admin');
//             } else if (version == 'user') {
//                 document.getElementById('edit').classList.add('hidden');
//                 console.log('user');
//             }
//         });
//     }

    
});
