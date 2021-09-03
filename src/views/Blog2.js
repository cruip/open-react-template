import React from 'react'
import tw from 'twin.macro'

const Blog2 = () => {
    return(
        <div tw="container mx-auto">
  

    <div tw="px-6 py-8">
        <div tw="container flex justify-between mx-auto">
            <div tw="w-full lg:w-8/12">
                <div tw="flex items-center justify-between">
                    <h1 tw="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                    <div>
                        <select tw="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option>Latest</option>
                            <option>Last Week</option>
                        </select>
                    </div>
                </div>
                <div tw="mt-6">
                    <div tw="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div tw="flex items-center justify-between"><span tw="font-light text-gray-600">Jun 1,
                                2020</span><a href="#"
                                tw="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div tw="mt-2"><a href="#" tw="text-2xl font-bold text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a>
                            <p tw="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
                                orem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div tw="flex items-center justify-between mt-4"><a href="#"
                                tw="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" tw="flex items-center"><img
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                        alt="avatar" tw="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                    <h1 tw="font-bold text-gray-700 hover:underline">Alex John</h1>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div tw="mt-6">
                    <div tw="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div tw="flex items-center justify-between"><span tw="font-light text-gray-600">mar 4,
                                2019</span><a href="#"
                                tw="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Design</a>
                        </div>
                        <div tw="mt-2"><a href="#"
                                tw="text-2xl font-bold text-gray-700 hover:underline">Accessibility tools for
                                designers and developers</a>
                            <p tw="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div tw="flex items-center justify-between mt-4"><a href="#"
                                tw="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" tw="flex items-center"><img
                                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                        alt="avatar" tw="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                    <h1 tw="font-bold text-gray-700 hover:underline">Jane Doe</h1>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div tw="mt-6">
                    <div tw="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div tw="flex items-center justify-between"><span tw="font-light text-gray-600">Feb 14,
                                2019</span><a href="#"
                                tw="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">PHP</a>
                        </div>
                        <div tw="mt-2"><a href="#" tw="text-2xl font-bold text-gray-700 hover:underline">PHP:
                                Array to Map</a>
                            <p tw="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div tw="flex items-center justify-between mt-4"><a href="#"
                                tw="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" tw="flex items-center"><img
                                        src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                        alt="avatar" tw="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                    <h1 tw="font-bold text-gray-700 hover:underline">Lisa Way</h1>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div tw="mt-6">
                    <div tw="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div tw="flex items-center justify-between"><span tw="font-light text-gray-600">Dec 23,
                                2018</span><a href="#"
                                tw="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Django</a>
                        </div>
                        <div tw="mt-2"><a href="#" tw="text-2xl font-bold text-gray-700 hover:underline">Django
                                Dashboard - Learn by Coding</a>
                            <p tw="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div tw="flex items-center justify-between mt-4"><a href="#"
                                tw="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" tw="flex items-center"><img
                                        src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                        alt="avatar" tw="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                    <h1 tw="font-bold text-gray-700 hover:underline">Steve Matt</h1>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div tw="mt-6">
                    <div tw="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div tw="flex items-center justify-between"><span tw="font-light text-gray-600">Mar 10,
                                2018</span><a href="#"
                                tw="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Testing</a>
                        </div>
                        <div tw="mt-2"><a href="#" tw="text-2xl font-bold text-gray-700 hover:underline">TDD
                                Frist</a>
                            <p tw="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div tw="flex items-center justify-between mt-4"><a href="#"
                                tw="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" tw="flex items-center"><img
                                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                        alt="avatar" tw="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                    <h1 tw="font-bold text-gray-700 hover:underline">Khatab Wedaa</h1>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div tw="mt-8">
                    <div tw="flex">
                        <a href="#" tw="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
                            previous
                        </a>
                    
                        <a href="#" tw="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            1
                        </a>
                    
                        <a href="#" tw="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            2
                        </a>
                    
                        <a href="#" tw="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            3
                        </a>
                    
                        <a href="#" tw="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            Next
                        </a>
                    </div>
                </div>
            </div>
            <div tw="hidden w-4/12 -mx-8 lg:block">
                <div tw="px-8">
                    <h1 tw="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                    <div tw="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                        <ul tw="-mx-4">
                            <li tw="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" tw="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" tw="mx-1 font-bold text-gray-700 hover:underline">Alex John</a><span
                                        tw="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                            </li>
                            <li tw="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                    alt="avatar" tw="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" tw="mx-1 font-bold text-gray-700 hover:underline">Jane Doe</a><span
                                        tw="text-sm font-light text-gray-700">Created 52 Posts</span></p>
                            </li>
                            <li tw="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                    alt="avatar" tw="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" tw="mx-1 font-bold text-gray-700 hover:underline">Lisa Way</a><span
                                        tw="text-sm font-light text-gray-700">Created 73 Posts</span></p>
                            </li>
                            <li tw="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                    alt="avatar" tw="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" tw="mx-1 font-bold text-gray-700 hover:underline">Steve Matt</a><span
                                        tw="text-sm font-light text-gray-700">Created 245 Posts</span></p>
                            </li>
                            <li tw="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                    alt="avatar" tw="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" tw="mx-1 font-bold text-gray-700 hover:underline">Khatab
                                        Wedaa</a><span tw="text-sm font-light text-gray-700">Created 332 Posts</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div tw="px-8 mt-10">
                    <h1 tw="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                    <div tw="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <ul>
                            <li><a href="#" tw="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    AWS</a></li>
                            <li tw="mt-2"><a href="#"
                                    tw="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Laravel</a></li>
                            <li tw="mt-2"><a href="#"
                                    tw="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vue</a>
                            </li>
                            <li tw="mt-2"><a href="#"
                                    tw="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                            <li tw="flex items-center mt-2"><a href="#"
                                    tw="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Django</a></li>
                            <li tw="flex items-center mt-2"><a href="#"
                                    tw="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- PHP</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div tw="px-8 mt-10">
                    <h1 tw="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                    <div tw="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div tw="flex items-center justify-center"><a href="#"
                                tw="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div tw="mt-4"><a href="#" tw="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                        <div tw="flex items-center justify-between mt-4">
                            <div tw="flex items-center"><img
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" tw="object-cover w-8 h-8 rounded-full"/><a href="#"
                                    tw="mx-3 text-sm text-gray-700 hover:underline">Alex John</a></div><span
                                tw="text-sm font-light text-gray-600">Jun 1, 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</div>
    )
}

export default Blog2;