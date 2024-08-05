'use client'
// components/form.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react'
import Modal from 'react-modal'

interface FormModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

interface FormData {
    name: string
    email: string
    projectTitle: string
    projectDetails: string
    budget: string
    deadline: string
    file: File | null
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        projectTitle: '',
        projectDetails: '',
        budget: '',
        deadline: '',
        file: null,
    })

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, file: e.target.files[0] })
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formData)
        onRequestClose()
    }

    const customStyles = {
        overlay: { zIndex: 1000 },
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Request Service"
            className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 z-10"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
            style={customStyles}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto overflow-auto max-h-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-600 text-center">
                    Start Your Project Today
                </h2>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-700"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm gray-700"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="projectTitle"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Title:
                        </label>
                        <input
                            type="text"
                            id="projectTitle"
                            name="projectTitle"
                            value={formData.projectTitle}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm gray-700"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="projectDetails"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Details:
                        </label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm gray-700"
                        ></textarea>
                    </div>
                    <div>
                        <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Budget:
                        </label>
                        <input
                            type="number"
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm gray-700"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Deadline:
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm gray-700"
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Submit
                    </button>
                </form>
                <button
                    onClick={onRequestClose}
                    className="mt-2 w-full bg-gray-300 text-gray-700 py-2 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Close
                </button>
            </div>
        </Modal>
    )
}

export default FormModal
