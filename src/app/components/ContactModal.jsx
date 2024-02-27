import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ThankYouModel from '../components/ThankYouModel'

export default function ContactModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button className="bg-inherit" onPress={onOpen}>Contact now →</Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <form>
                                    <div className="space-y-12">
                                        <div className="border-b border-gray-900/10 pb-12">
                                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                This information will be share with Letzstepin.
                                            </p>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-4">
                                                    <label htmlFor="username" className="text-sm font-medium leading-6 text-gray-900">
                                                        Email
                                                    </label>
                                                    <div className="mt-2">
                                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                                            <input
                                                                type="email"
                                                                name="username"
                                                                id="username"
                                                                autoComplete="username"
                                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="janesmith@gmail.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3 w-full">
                                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Category
                                                    </label>
                                                    <div className="mt-2 w-full">
                                                        <select
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="Education">Education</option>
                                                            <option value="Fitness">Fitness</option>
                                                            <option value="Coworking">Co-working</option>
                                                            <option value="Hotel">Hotel</option>
                                                            <option value="Banquet">Banquet</option>
                                                            <option value="RealEstate">Real Estate</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-span-full">
                                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Description
                                                    </label>
                                                    <div className="mt-2">
                                                        <textarea
                                                            id="about"
                                                            name="about"
                                                            rows={3}
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your query</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <div color="primary" onPress={onClose}>
                                    <ThankYouModel />
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    );
}
