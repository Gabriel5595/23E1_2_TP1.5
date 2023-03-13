import './App.css'

export default function App() {
  const var1 = 10;
  const var2 = 30;
  const conta1 = (10*var1)+(5*var2);
  const var3 = conta1+2

  return (
    <main>
      <p>O primeiro resultado é {conta1}</p>
      <p>O segundo resultado da conta {var3}</p>
    </main>
  )
}
