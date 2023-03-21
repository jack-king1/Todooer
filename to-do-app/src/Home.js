import ToDoItem from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Layout from "./Layout";
const Home = () => {
  var toDoList;
  var completedtoDos;

  function AddItem() {}

  function DeleteItem() {}

  function CompletedItem() {}

  return (
    <>
      <h1 className="text-white text-center font-myFont p-4 text-4xl md:text-left md:text-7xl">
        Todooer
      </h1>
      <ToDoList />
    </>
  );
};

export default Home;
