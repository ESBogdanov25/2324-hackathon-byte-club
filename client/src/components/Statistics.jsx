import { stats } from '../constants/index';

const Statistics = () => (
    <>
        <section className="container sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-14 mx-auto">
            <div className="flex items-center justify-center">
                <div className="grid gap-10 my-8 sm:gap-20 sm:grid-cols-2 lg:gap-30 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="w-full max-w-xl text-center object-cover object-center h-60 mx-auto rounded-lg bg-indigo-600 shadow-3xl text-white border-2 border-blue-200 py-12">
                            <h5 className="text-lg pb-4 font-bold ">{stat.title}</h5>
                            <p className="font-medium">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default Statistics;
