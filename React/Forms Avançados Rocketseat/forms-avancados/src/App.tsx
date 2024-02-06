import './styles/global.css'
import './App.css'

import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Primeiro passo: criar uma variavel contendo z.object e os seus campos dentro.
const createUserFormSchema = z.object({
  name: z.string()
    .min(1, "O nome é obrigatorio")
    .transform(nome => {
      return nome.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .min(1, "O email é obrigatorio")
    .email('Formato de e-mail invalido.')
    .refine(email => {
      return email.endsWith("@gmail.com")
    }, "O email precisa ser do google"),
  password: z.string()
    .min(6, "A senha precisa de no minimo 6 caracteres."),
  techs: z.array(z.object({
    title: z.string().min(1, "O titulo é obrigatorio"),
    knowledge: z.coerce.number().min(1).max(100), // Conhecimento
  })).min(2 , "Insira pelo menos 2 tecnologias")
})

// Segundo passo: criar uma tipagem com o z.object
type CreateUserFormData = z.infer<typeof createUserFormSchema>

function App() {

  // Terceiro passo: Colocar o generics no formulario.
  const { register, handleSubmit, formState: { errors }, control } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs',
  })

  function addNewTech() {
    append({ title: '', knowledge: 0 })
  }

  function createUser(data: CreateUserFormData) {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      <main className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
        <form onSubmit={handleSubmit(createUser)} className='flex flex-col gap-4 w-full max-w-xs'>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">Nome:</label>
            <input
              type="text"
              className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-black'
              {...register("name")}// Registrar os campos no useForm

            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">E-mail:</label>
            <input
              type="email"
              id="email"
              className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-black'
              {...register("email")}// Registrar os campos no useForm

            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">Senha:</label>
            <input
              type="password"
              id="password"
              className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-black'
              {...register("password")}  // Registrar os campos no useForm
            />

            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='flex items-center justify-between'>Tecnologias

              <button type='button' onClick={addNewTech} className='text-emerald-500 text-xs'>Adicionar</button>
            </label>

            {
              fields.map((field, index) => {
                return (
                  <div key={field.id} className='flex gap-2'>
                    <div className="flex flex-col gap-1 flex-1" key={field.id}>
                      <input id="text" className=' border border-zinc-200 shadow-sm rounded h-10 px-3 text-black' {...register(`techs.${index}.title`)} />
                      {errors.techs?.[index]?.title && <span className="text-red-500 text-sm">{errors.techs[index]?.title?.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1" key={field.id}>
                      <input id="number" className='w-16 flex-1 border border-zinc-200 shadow-sm rounded h-10 px-3 text-black' {...register(`techs.${index}.knowledge`)} />
                      {errors.techs?.[index]?.knowledge && <span className="text-red-500 text-sm">{errors.techs[index]?.knowledge?.message}</span>}
                    </div>
                  </div>
                )
              })
            }

            { errors.techs && <span className="text-red-500 text-sm">{errors.techs.message}</span>}
          </div>
          <button
            type="submit"
            className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'>
            Salvar
          </button>
        </form>
      </main>
    </>
  )
}

export default App
