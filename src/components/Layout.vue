<script>
import AppMainLeft from "components/AppMain/AppMainLeft";
import AppMainTop from "components/AppMain/AppMainTop";

export default {
  render(createElement) {
    let menuData = this.$router.options.routes;
    return createElement(
      this.navPosition === "left" ? AppMainLeft : AppMainTop,
      {
        props: { menuData }
      }
    );
  },
  components: {
    AppMainLeft,
    AppMainTop
  },
  props: {
    navPosition: {
      type: String,
      default: "left"
    }
  }
};
</script>
