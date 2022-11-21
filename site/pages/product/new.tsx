import { useMemo, useState, useCallback } from "react";
import Select from 'react-select';
import axios from "axios";
import { toast } from "react-toastify";

export default function CreateProductPage() {
  const piceOptions = useMemo(() => [
    { value: 'xienthitlon', label: 'Xiên thịt lợn' },
    { value: 'uopduachua', label: 'Ướp dưa chua' },
    { value: 'otdo', label: 'Ớt đỏ' },
    { value: 'hanhdo', label: 'Hành đỏ' },
    { value: 'ngoraumui', label: 'Ngò/rau mùi' },
    { value: 'otmayonnaise', label: 'Ớt Mayonnaise' },
  ], []);
  
  const categoryOptions = useMemo(() => [
    { value: 'banhmy', label: 'Bánh Mỳ' },
    { value: 'monnuoc', label: 'Bún(Phở)' },
    { value: 'comdia', label: 'Cơm Dĩa' },
  ], []);

  const [formData, setFormData] = useState({
    category: categoryOptions[0].value,
    pices: JSON.stringify([]),
  });

  const onSubmit = useCallback(async () => {
    try {
      console.log("formData", formData);
      await axios.post("http://localhost:3002/api/product", formData);
      toast.success("Create product successfully");
    } catch (err) {
      console.log("Create data error: ", err);
      toast.error("Create product failed!");
    }
  }, [formData]);
  
  console.log(formData);

  return (
    <div className="max-width text-center flex justify-center pt-[150px]">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-start block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Product name
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-product-name"
              type="text"
              placeholder="Bánh mỳ bò"
              onChange={e => setFormData((prev) => ({...prev, name: e.target.value}))} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="text-start block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="0"
              onChange={e => setFormData((prev) => ({...prev, price: parseInt(e.target.value)}))} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start" htmlFor="grid-password">
              Content
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-[200px]"
              id="grid-content"
              placeholder="Product content" 
              onChange={e => setFormData((prev) => ({...prev, content: e.target.value}))} />
            <p className="text-gray-600 text-xs italic">This is product description to show user</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start" htmlFor="grid-password">
              Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Image Url"
              onChange={e => setFormData((prev) => ({...prev, image: e.target.value}))} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start" htmlFor="grid-password">
              Category
            </label>
            <Select
              defaultValue={categoryOptions[0]}
              name="category"
              options={categoryOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={e => setFormData((prev) => ({...prev, category: e.value}))}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start" htmlFor="grid-password">
              Pices
            </label>
            <Select
              defaultValue={[]}
              isMulti
              name="colors"
              options={piceOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={e => setFormData((prev) => ({...prev, pices: JSON.stringify(e)}))}
            />
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={onSubmit}
        >
          Create Product
        </button>
      </form>
    </div>
  );
}