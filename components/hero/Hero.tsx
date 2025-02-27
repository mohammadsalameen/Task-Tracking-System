import { Roboto } from "next/font/google";
const robotoFont = Roboto({
  weight : ['400'], subsets : ['latin'], fallback : ['Arial', 'Tahoma']
});
const Hero = () => {
  return (
    <div style={robotoFont.style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta odio quidem eveniet fugiat in veniam a! Nemo ex necessitatibus officiis, quod tempora quam eum odit voluptas minima error, molestias maxime?
    </div>
  );
};

export default Hero;
