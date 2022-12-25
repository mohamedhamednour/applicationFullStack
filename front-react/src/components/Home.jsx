import React from "react";
import { Link } from "react-router-dom";
import { todoapis, deleteitem } from "./store";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  //destruct method in reducer and get vlaues
  const { isloading, books, error } = useSelector((state) => state.apiSlice);

  React.useEffect(() => {
    //call api get shoping by useEffect
    dispatch(todoapis());
  }, [dispatch]);
  return (
    <div>
      {isloading && 'loadind..' }
      <div className="overflow-x-auto relative mt-[100px] m-auto">
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="py-3 px-6">
                Range
              </th>
              <th scope="col" className="py-3 px-6">
                Desc
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {books
              ? books.map((item) => [
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      className="p-4"
                    >
                      {" "}
                     {item.range}
                    </th>
                    <td v-html="item.arrivingArabicName" className="py-4 px-6">
                      {item.description}
                    </td>
                    <td v-html="item.arrivingEnglishName" className="py-4 px-6">
                    {item.name}

                    </td>

                    <td className="py-3 gap-1  flex px-3">
                      <button  onClick={() => dispatch(deleteitem(item.id))} className="bg-red-500 mt-[20px] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        delete
                      </button>
                      <Link
                        to={`/${item.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-[20px] rounded"
                      >
                        edit
                      </Link>
                    </td>
                  </tr>,
                ])
              : "loading..."}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
