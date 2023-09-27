

export function intervalo(slider: HTMLDivElement): void {
    if (slider.children.length >= 2) {
        setInterval(() => {
            slider.style.marginLeft = '-100%',
                slider.style.transition = 'margin-left 0.5s ease';
            setTimeout(() => {
                slider.style.marginLeft = '0',
                    slider.style.transition = 'unset';
                const primerElemento = slider.firstElementChild as HTMLDivElement;
                slider.appendChild(primerElemento);
            }, 500);
        }, 2000);
    }
}