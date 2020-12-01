export default {
    data() {
        return {
            containerWidth: 0
        }
    },
    methods: {
        onWindowResizeEvent() {
            this.containerWidth = this.$refs.container.offsetWidth;
        },
    },
    mounted() {
        this.onWindowResizeEvent();
        window.addEventListener('resize', this.onWindowResizeEvent);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onWindowResizeEvent);
    }
}