
<template>
<div>
  <div class="ui fixed inverted menu">
        <a class="header item"></a>
            <a class="header item"><span> GROUP DL SANTE</span><pre>   </pre></pre><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQF-nHhmg1HGBw/company-logo_200_200/0/1549979659929?e=1661385600&v=beta&t=D8Uz14kNQU1WhIX8EveWzAtP5GEHX7ioeSj7MFpOdCE" alt="" ><pre>   </pre></a>        
            <a class="items in item">A PROPOS</a>
            <a class="item" href="/#/AddVehicule">NOS SERVICES</a>
            <a class="item">QUI SOMMES-NOUS</a>
            <a class="item">NOTRE DOMAINE D'ACTIVITE</a>
            <a class="item">NOS SERVICES</a><pre>                                   </pre></a>
            <a href="#modal" class="item">CONNEXION</a>

    </div>
    <div class="modal" id="modal" style="position:fixed; text-align:center;">
    <div class="modal__content">
        <a href="#" class="modal__close" style="float:right;">&times;</a>
        <h1 class="modal_heading">S'enregistrer/Se connecter</h1>
        <form class="ui form" method="post" ><br><br>

            <div class="ui input" style="width:400px;">
              <input placeholder="Email..." name="email" type="email" id = "password" required autocomplete="off">
              <i class="email icon"></i>
            </div><br><br>

            <div class="ui group" style="width:400px; margin-left:150px ;">
            <input name="password" placeholder="Mot de passe..." type="password" id = "password" required autocomplete="off"/>
            </div><br><br>
            <input style="left:250px;position:absolute;" class="btn" type="submit" @click="SendData()" value="S'enregistrer/Se connecter"/>
          </form>
    </div>
    </div><br><br><br><br>

    <div id="masthead" style="margin-right: 100px; margin-left: 100px;">
    <div class="inner">
        <div>
            <p>
            CM Group est une entreprise qui fournit des solutions technologiques innovantes
            pour les métiers financiers. Il est le résultat de plus de 10 années d’expérience
            dans l’audit, la planification stratégique, la formation en microfinance, la banque
            et le management de la qualité. 
            </p>

            <p>
            Il s'agit pour nous de gérer votre argent en toute
            sécurité, fiabilité Il s'assure du financement de l'exploitation à travers les fonds.
            Après chaque exercice comptable, il est amené à superviser la clôture des comptes.
            </p>			
        </div>
        <div class="illustration"  width="89" height="51" style="width: 600px; left:520px; position:absolute; top: 80px;" >
        <div class="project-carousel">
            <div class="project-strip" style="width: 600px; left: 20px;position:absolute">
                <div class="project"><img src="img/1.jpg" alt=""/></div>
                <div class="project"><img src="img/2.jpg" alt=""/></div>
                <div class="project"><img src="img/3.jpg" alt=""/></div>
                <div class="project"><img src="img/4.jpg" alt=""/></div>
                <div class="project"><img src="img/6.jpg" alt=""/></div>
                <div class="project"><img src="img/7.jpg" alt=""/></div>
            </div>
            <div class="project-screen">
            <div class="project-detail">
                <div class="project"><img src="img/1.jpg" alt=""/></div>
                <div class="project"><img src="img/2.jpg" alt=""/></div>
                <div class="project"><img src="img/3.jpg" alt=""/></div>
                <div class="project"><img src="img/4.jpg" alt=""/></div>  
                <div class="project"><img src="img/6.jpg" alt=""/></div>
                <div class="project"><img src="img/7.jpg" alt=""/></div>
                </div>
            </div>
        </div>
            
    </div>
    </div> <!-- .inner -->
</div> <!-- #masthead -->

<div id="content-wrapper">
  <div class="inner">
    <div class ="front-content">
        <nav class="activite">
            <ul>
                <li id="nav-adherent">
                    <a href="error404/index.html">
                        <img src="assets/apropos.png" width="74" height="74" />
                        <div>
                            <h3>A propos</h3>
                                <p>L’entreprise  egalement sur la gestion des plaintes.</p>
                        </div>
                        
                    </a>
                </li>
                <li id="nav-compte">
                    <a href="error404/index.htmlp">
                        <img src="assets/hist.png" width="74" height="74" />
                        <div>
                             <h3>Historique</h3>
                            <p>Nous vous founissons régulièrement les statistique du nombre d'ahérent par rubrique</p>
                        </div>                     
                    </a>
                </li>
                <li id="nav-bilan">
                    <a href="error404/index.html">
                        <img src="assets/photo.png" width="74" height="74" />
                        <div>
                            <h3>Photo</h3>
                               <p>Ici nous présentons les photos de nos différentes actions menées.</p>
                        </div>
                    </a>
                </li>
                <li id="nav-statistic">
                      <a href="error404/index.html">
                        <img src="assets/community.png" width="74" height="74" />
                        <div>
                            <h3>Community</h3>
                            <p>Nous vous écoutons et sommes entièrement à votre service.</p>
                        </div>
                    </a>       
                </li>
            </ul>
        </nav>

</div>

</div>
</div>    
</div>

</template>

<script>
export default {
  name: 'Acceuil',
  data () {
    return {
      email:"",
      password:""
    }
  }, 
  methods: {
    SendData: function(){
      var email = this.email
      var password = this.password
      this.$htpp.post('http://localhost:7000/api/logins/register/?email='+{email:email}+'&password='+{password:password}).then((response)=> {
      console.log('succès', response)
        }, (response)=> {
          console.log('erreur', response)
        })
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.modal{
     background-color: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      opacity: 0;
      visibility: hidden;
      transition: all .5s;
      }
      .modal__content{
      width: 50%;
      height: 65%;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      border-radius: 1em;
      opacity: 0;visibility: hidden;
      transform: all .5s;
      }
    #modal:target{
      opacity: 1;
      visibility: visible;
      }
    #modal:target .modal__content{
      opacity: 1;
      visibility: visible;

  }
    .modal__heading{
      color: dodgerblue;
      margin-bottom: 1em;
      }
    .modal__paragraph{
      line-height: 1.5em;
      }
    .modal-open{
      display: inline-block;
      color: dodgerblue;
      margin: 2em;
      }
    .btn {
    background: transparent;
    color: black;
    border: 2px solid black;
    border-radius: 70px;
    padding: 11px 45px;
    font-size: 18px;
    }
    .btn:hover {
    background-color: #71c3f7 ;
    color: white;
    border: 2px solid #71c3f7;
    }

   .main.container {
     margin-top: 100px;
    }

</style>
