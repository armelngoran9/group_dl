<template>
     <div class="ui container two">
        <h1>Ajout de nouveau coursier</h1>

        <div style="display: grid; grid-template-areas: auto; grid-row-gap : 180px; height: 900px;">
            
            <form action="/add_coursier" method="POST" class="ui form" ><br>

                <label>Marque</label>
                <input id="coursier_name" type="text" name="marque" ><br>
                <span styserie_numberle="color: red;" id="name_missing"></span><br><br>

                <label>Numero de serie</label>
                <input id="coursier_pseudo" type="text" name="serie_number"><br>
                <span style="color: red; font-style: italic;" id="pseudo_missing"></span><br><br>

                <div style="display: flex; justify-content: space-evenly; flex-direction: row;">       
                    <div></div><div></div><div></div><div></div><button onclick="document.location.href='admin_home'" class="ui red labeled cancel icon button"><i class="ui icon delete"></i>Annuler</button><button id="bouton_envoi" class="ui green labeled submit icon button"><i class="ui icon send"></i>Envoyer</button>
                </div>

            </form>
        </div>

    </div>
</template>

<script>
 export default {
  name: 'AddVehicule'
}
</script>

<style>

</style>