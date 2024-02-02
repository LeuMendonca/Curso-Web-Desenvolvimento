

function TemplateExpression() {

    const name = "Leonardo"

    const data = {
        age : 22 , 
        job : "Programador"
    }

  return (
    <div>
        <p>A soma é { 2 + 2 } </p>
        <p>O nome é { name } </p>

        <p> Profissão: { data.job }</p>
        <p> Idade: { data.age } </p>

    </div>
  )
}

export default TemplateExpression