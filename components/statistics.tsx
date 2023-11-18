export default function Example() {
    const stats = [
      { id: 1, name: 'Total Questions Asked', value: '300,000' },
      { id: 2, name: 'Worldwide Views', value: '100 million+' },
      { id: 3, name: 'Number of Languages', value: '80+' },
    ];
  
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3" data-aos-id-stats>
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4" data-aos="fade-left" data-aos-anchor="[data-aos-id-stats]">
                <dt className="h3 mb-4 text-base leading-7 text-white">{stat.name}</dt>
                <dd className="h1 mb-4 order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  