export type TProductProps = {
  id: string;
  name: string;
};

const Product = ({ id, name }: TProductProps) => {
  return (
    <li className="product-item" key={id}>
      <span>{name}</span>
    </li>
  );
};

export default Product;
