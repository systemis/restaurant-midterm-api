import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";

function ServiceProduct(props: any) {
  return (
    <div className='product-service' onClick={props.onClick}>
      <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src={props.image} alt="" />
      <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
        <div style={{ display: 'flex' }}>
          <h2>{props.name}</h2>
          <span style={{ width: '100px', height: '38px', borderBottomStyle: 'dotted' }}></span>
          <h3>{props.price}</h3>
        </div>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

function ComdiaProduct(props: any) {
  return (
    <div className='product' style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px', width: '100%' }}  onClick={props.onClick}>
      <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '120px' }} src={props.image} alt="product image" />
      <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px', width: '95%' }}>
        <div style={{ display: 'flex' }}>
          <h2>{props.name}</h2>
          <span style={{ width: '70%', height: '38px', borderBottomStyle: 'dotted' }}></span>
          <h3>{props.price}</h3>
        </div>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

function BanhMyProduct(props: any) {
  return (
    <div className='product' style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px', width: '50%', float: "left" }}  onClick={props.onClick}>
      <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src={props.image} alt="" />
      <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
        <div style={{ display: 'flex' }}>
          <h2>{props.name}</h2>
          <span style={{ width: '200px', height: '38px', borderBottomStyle: 'dotted' }}></span>
          <h3>{props.price}</h3>
        </div>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

export default function IndexPage() {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  const handleGetProducts = async () => {
    const fetchData = await axios.get("http://localhost:3002/api/products");
    setProduct(fetchData.data.data);
  }

  useEffect(() => {
    handleGetProducts();  
  }, []);

  return (
    <div>
      <section className='services' id='services'>
        <div className='max-width'>
          <h3 className='title title-comdia'></h3>
          {product.filter(item => item.category === "comdia").map((item, index) => {
            return (
              <ComdiaProduct
                key={`comdiaitem-${index}`}
                name={item.name}
                image={item.image}
                price={item.price}
                content={item.content} 
                onClick={() => router.push(`/product/${item.id}`)} />
            )
          })}
        </div>
      </section >

      <section className='services' id='services'>
        <div className='max-width'>
          <h3 className='title1'></h3>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {product.filter(item => item.category === "banhmy").map((item, index) => {
              return (
                <BanhMyProduct
                  key={`comdiaitem-${index}`}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  content={item.content}
                  onClick={() => router.push(`/product/${item.id}`)}
                />
              )
            })}
          </div>
        </div>
      </section >

      <section className='services' id='services'>
        <div className='max-width'>
          <h3 className='title2'></h3>
          <div className="product-container">
            {product.filter(item => item.category === "monnuoc").map((item, index) => {
              return <ServiceProduct 
                key={`service-product-${index}`}
                image={item.image}
                name={item.name}
                price={item.price}
                content={item.content}
                onClick={() => router.push(`/product/${item.id}`)}
              />
            })}
          </div>
        </div>
      </section >
    </div >
  );
}
