import BullHorn from "@/icons/bullHorn";
import Cart from "@/icons/cart";
import Cloud from "@/icons/cloud";
import Code from "@/icons/code";
import Test from "@/icons/test";
import Wand from "@/icons/wand";

const RenderIcons = ({ type, ...rest }: { type: string }) => {
  switch (type) {
    case "BULLHORN": {
      return <BullHorn {...rest} />;
    }
    case "WAND": {
      return <Wand {...rest} />;
    }
    case "CODE": {
        return <Code {...rest} />
    }
    case "CLOUD": {
        return <Cloud {...rest} />
    }
    case "CART": {
        return <Cart {...rest} /> 
    }
    case "TEST": {
        return <Test {...rest} />
    }
  }
};

export default RenderIcons;
