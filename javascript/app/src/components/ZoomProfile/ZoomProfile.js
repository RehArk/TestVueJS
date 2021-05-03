export default {
    name: 'zoomProfile',
    props: {
        selectedProfile: Object,
        selectedProfileId: Number
    },
    methods: {
        copieUser(index) {
            this.$emit("copieUser", index)
        },

        deleteUser(index) {
            this.$emit("deleteUser", index)
        }
    }

}