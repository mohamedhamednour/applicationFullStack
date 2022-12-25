import { updateItem } from "./store";
import { useDispatch } from "react-redux";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddItem() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const [idData, setIDData] = React.useState({});
  const navigate = useNavigate();
  const [name, setname] = React.useState();
  const [description, setdec] = React.useState();
  const [range, setrange] = React.useState();

  const getData = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/shoping/${id}`);
    const converJson = JSON.parse(JSON.stringify(data));
    console.log(converJson.id);
    setIDData(converJson);
  };
  React.useEffect(() => {
    getData();
  }, []);


  const handelform = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateItem([ {
          name,
          description,
          range
        },id])
      )
        .then((res) => {
          console.log('res' ,res)
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="w-[80%]  m-auto  mt-[100px]">
        <h1>item {id}</h1>
        <form
          onSubmit={handelform}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              title
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              name="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder={idData.name}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              description
            </label>
            <input
              onChange={(e) => setdec(e.target.value)}
              value={description}
              name="description"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder={idData.description}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="range"
            >
              range
            </label>
            <input
              onChange={(e) => setrange(e.target.value)}
              value={range}
              id="range"
              name="range"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={idData.range}
            />
          </div>
          <input className="bg-blue-500 p-2 text-white" type="submit" />
        </form>
      </div>
    </>
  );
}
