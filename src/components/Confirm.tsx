import { Component, createSignal, onCleanup } from "solid-js";
import { TomiiModal } from './TomiiModal';
import styles from "./Confirm.module.css";
import whisky from "../assets/whisky.jpeg";

export const Confirm: Component = () => {
    const [isOpen, setIsOpen] = createSignal(false)

    const onClick = () => {
        setIsOpen((prev) => !prev)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const clickOutside = (element: any, accessor: any) => {
        const onClick = (e: Event) => !element.contains(e.target) && accessor()?.();
        document.body.addEventListener("click", onClick)

        onCleanup(() => document.body.removeEventListener("click", onClick))
    }
    return (
        <div>
            <button onClick={onClick}>Open Modal</button>
            <TomiiModal isOpen={isOpen()}>
                <div class={styles.overlay}>
                    <div class={styles.modal} use:clickOutside={() => onClose()}>
                        <div>
                            <h3>富井副部長が現れた！</h3>
                            <img src={whisky} alt='whisky' />
                        </div>
                        <div>
                            <button onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </TomiiModal>
        </div>
    )
}