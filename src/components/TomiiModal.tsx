import { Component, splitProps, Show, onCleanup } from "solid-js";
import { Portal } from "solid-js/web";

type Props = {
    isOpen: boolean
    children: any
}

export const TomiiModal: Component<Props> = (props) => {
    const [local, other] = splitProps(props, ['isOpen', 'children'])
    return (
        <Portal>
            <Show when={local.isOpen}>
                {local.children}
            </Show>
        </Portal>
    )
}