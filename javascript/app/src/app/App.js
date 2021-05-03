import AppTitle from '../components/HelloWorld.vue'
import ProfileForList from '../components/ListeProfile/ListeProfile.vue'
import ProfileForZoom from '../components/ZoomProfile/ZoomProfile.vue'

export default {
    name: 'App',
	components: {
        AppTitle,
        ProfileForList,
        ProfileForZoom
    },
	data(){
		return{
            apiLoaded: false,
			profiles: [],
			selectedProfileId: null,
			selectedProfile: null
		}
	},
	methods: {

        // initialise les données
        init() {
            this.request("https://randomuser.me/api/", "?results=10");
		},

		// recupere l'id et l'objet selectionner
		getIndex (index) {
            this.selectedProfile = this.profiles[index];
			this.selectedProfileId = index;
		},

		// ajoute un utilistaeur à la liste
		addUser () {
            this.request("https://randomuser.me/api/");
		},

		// copie un utilisateur
		copieUser (index) {
            // on va pas jugé... Il me copiait la ref de l'objet et malgré moulte tentative,
            // impossible de faire autrement... Mon dieu c'est pas beau
            let user = JSON.parse(JSON.stringify(this.profiles[index]));
			user.name.last += " copie";
			this.profiles.push(user);
			this.selectedProfile = this.profiles[this.profiles.length -1];
			this.selectedProfileId = this.profiles.length -1;
		},

		// supprime l'utilisateur et reset le zoom
		deleteUser (index) {
            this.profiles.splice(index, 1);
			this.selectedProfile = null;
			this.selectedProfileId = null;
		},

				// requete de remplacement d'ajax
		request (url, param = '') {

			const xhr = new XMLHttpRequest();

			xhr.onload = () => {
				if (xhr.status == 200) {
                    this.profiles = this.profiles.concat(JSON.parse(xhr.responseText)['results']);
					this.apiLoaded = true;
					console.log(this.profiles)
				}
			};

			xhr.open('get', url + param);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send();
		}

	},
	mounted () {
        this.init()
    }
}