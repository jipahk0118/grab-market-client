import { useParams } from "react-router-dom";
import axios from "axios"
import { react, useEffect , useState } from "react";
import "./index.css"
import { Link } from "react-router-dom";
import {API_URL}from "../config/constants"
import dayjs from 'dayjs'
import { Profiler } from "react/cjs/react.production.min";
import { Button, message } from "antd"



function ProductPage() {
  const {id} = useParams();
  const [product, setProducts] = useState(null);


  const getProduct = () =>{
    axios.get(`${API_URL}/products/${id}`)
    .then(function(result){
      setProducts(result.data.product);
      console.log(result); 
    })
    .catch(function(error){
      console.error(error);
    });
  }
  

  useEffect(function(){
  getProduct();
},[])

if(product === null){
  return <h1>상품 정보를 가져오고 있습니다...</h1>
}

const onClickPurchase = () =>{
  axios.post(`${API_URL}/purchase/${id}`)
  .then((result)=>{
    message.info('구매가 완료되었습니다!!')
    getProduct();
  }).catch((error)=>{
    message.error(`에러가 발생했습니다. ${error.message}`)
  })
}

return (
  <div>
    <div id="image-box">
      <img src ={`${API_URL}/${product.imageUrl}`} />
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
      {dayjs(product.createdAt).format('YYYY년 MM월 DD일')}
    </div>
    <Button id="purchase-button" 
            size="large" 
            type="primary"  
            danger onClick={onClickPurchase}
            disabled = {product.soldout === 1? true : false}
            >
              구매하기
    </Button>
    <pre id="description">
      {product.description}
    </pre>
  </div>
)
}
export default ProductPage;
