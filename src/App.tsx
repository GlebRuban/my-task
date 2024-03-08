import './App.css';
import ParamsEditor from './ParamsEditor';

type Param = { id: number; name: string; type: "string" };

const params: Param[] = [
  { id: 1, name: "Назначение", type: "string" }, 
  { id: 2, name: "длина", type: "string" }
];

const initialModel = {
  paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" },
  ],
};

function App() {
  return <>
    <div>
      <h1>Product Editor</h1>
      <ParamsEditor params={params} model={initialModel} />
    </div>
  </>
}

export default App;
