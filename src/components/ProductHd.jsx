import { TbArrowRight } from "react-icons/tb";

const ProductHd = (props) => {
  const ProductHd = props;
  return (
    <div>
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{" "}
      <TbArrowRight /> {product.name}
    </div>
  );
};

export default ProductHd;
