// import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import { Component } from "react";
import Recaptcha from "react-google-invisible-recaptcha";

export const sitekey = "6LcUPSoeAAAAAKtS-bk8Oj_4zU_jc8xPigZ_twj7";

export default class ReCaptcha extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onResolved = this.onResolved.bind(this);
  }

  render() {
    return (
      <Recaptcha
        ref={(ref) => (this.recaptcha = ref)}
        sitekey={sitekey}
        onResolved={this.onResolved}
      />
    );
  }

  onSubmit() {
    if ("" === this.state.value) {
      alert("Validation failed! Input cannot be empty.");
      this.recaptcha.reset();
    } else {
      this.recaptcha.execute();
    }
  }
  onResolved() {
    alert("Recaptcha resolved with response: " + this.recaptcha.getResponse());
  }
}

// function recaptcha() {

//   const verifyCallback = (recaptchaToken) => {
//     // Here you will get the final recaptchaToken!!!
//     console.log(recaptchaToken, "<= your recaptcha token");
//   };

//   const updateToken = () => {
//     // you will get a new token in verifyCallback
//     this.recaptcha.execute();
//   };

//   return (
//     <Recaptcha
//       ref={(ref) => (this.recaptcha = ref)}
//       sitekey="your_site_key"
//       action="action_name"
//       verifyCallback={verifyCallback}
//     />
//   );
// }
