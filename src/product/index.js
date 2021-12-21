import { useParams } from "react-router-dom";
import axios from "axios"
import { react, useEffect , useState } from "react";
import "./index.css"

function ProductPage() {
  const {id} = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function(){
  axios.get(`https://a1cfa8bb-a167-4d79-9fc5-d13e37dde8cc.mock.pstmn.io/product/${id}`)
  .then(function(result){
    setProducts(result.data);
    console.log(result); 
  })
  .catch(function(error){
    console.error(error);
  });
},[])

if(product === null){
  return <h1>상품 정보를 가져오고 있습니다...</h1>
}

return (
  <div>
    <div id="image-box">
      <img src ={"/"+product.imageUrl} />
    </div>
    <div id="profile-box">
      <img src="/images/icons/avatar.png"/>
      <span>{product.seller}</span>
    </div>
    <div id="contents-box">
      <div id="name">{product.name}</div>
      <div id="price">{product.price}원</div>
    </div>
    <div id="createAt">
      2020년 12월 8일
    </div>
    <div id="description">
      {product.description}
    </div>
  </div>
)
}
export default ProductPage;
