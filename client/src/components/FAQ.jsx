import { questions } from '../constants/index';

const FAQ = () => (
    <>
        <section className="container sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-14 mx-auto">
            <h1 className="text-[1.4em] p-[0.5em] sm:text-[3em] sm:p-[1em] font-bold text-center">Frequently asked questions</h1>
            <div className="flex items-center justify-center">
                <div className="grid gap-10 my-8 sm:gap-20 sm:grid-cols-2 lg:gap-30 lg:grid-cols-3">
                    {questions.map((question) => (
                        <div key={question.id} className="w-full max-w-xs text-center object-cover object-center h-60 mx-auto rounded-lg bg-white border-2 border-blue-200 py-12 px-6">
                            <h5 className="text-base pb-4 font-bold ">{question.title}</h5>
                            <p className="border-t-4 pt-4 border-black">{question.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
)

export default FAQ;
