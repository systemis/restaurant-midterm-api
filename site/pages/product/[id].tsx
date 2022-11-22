import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BsFillCheckCircleFill } from 'react-icons/bs'

export default function ProductDetailPage() {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});

  const handleGetData = async () => {
    try {
      const fetchData = await axios.get(`http://localhost:3002/api/product/${router?.query?.id}`);
      setProduct(fetchData.data.data);
    } catch { }
  }

  useEffect(() => {
    handleGetData();
  }, [router.asPath]);

  return (
    <div>
      <section className='detail' id='details'>
        <div className='max-width'>
          <h3 className='title3'></h3>
          <div className='both-img-content'>
            <img className='img-product' src={product.image} alt="product image" />

            <div className='content-product' style={{ marginLeft: '50px', gap: '10px' }}>
              <h3 className='title4' style={{ fontSize: '25px', margin: '10px 0 10px' }}>{product?.name}</h3>
              <span className='content'>{product?.content}</span>
              <h3 className='thanhPhan'>Thành Phần</h3>

              <div className='infoProduct'>
                {product?.pices && JSON.parse(product.pices)?.map((item: any, index: any) => {
                  return (
                    <div className='detailProduct' key={`picesitem-${index}`}>
                      <div className='flex items-center p2ps'>
                        <BsFillCheckCircleFill style={{ marginRight: '10px' }} />
                        <p className="left">{item.label}</p>
                      </div>
                      <p className='lineProduct'></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className='detail' id='details'>
        <div className='max-width'>
          <h3 className='title4'></h3>
        </div>
      </section>
    </div >
  );
}