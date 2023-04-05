import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const CustomCursor = () => {
    const mainCursor = useRef(null);
    const secondaryCursor = useRef(null);
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        currentX: 0,
        currentY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    useEffect(() => {
        mainCursor.current.style.left = `calc(50% - ${
            mainCursor.current.clientWidth / 2
        }px)`;
        mainCursor.current.style.top = `calc(50% - ${
            mainCursor.current.clientHeight / 2
        }px)`;

        secondaryCursor.current.style.left = `calc(50% - ${
            secondaryCursor.current.clientWidth / 2
        }px)`;
        secondaryCursor.current.style.top = `calc(50% - ${
            secondaryCursor.current.clientHeight / 2
        }px)`;
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            mainCursor.current.style.left = '0';
            mainCursor.current.style.top = '0';

            secondaryCursor.current.style.left = '0';
            secondaryCursor.current.style.top = '0';

            const { clientX, clientY } = event;

            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX =
                mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - secondaryCursor.current.clientHeight / 2;

            mainCursor.current.style.transform = `translate3d(${
                mouseX - mainCursor.current.clientWidth / 2
            }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
        });
    }, []);

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const { mouseX, mouseY, currentX, currentY, distanceX, distanceY } =
                positionRef.current;

            if (!currentX || !currentY) {
                positionRef.current.currentX = mouseX;
                positionRef.current.currentY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - currentX) * 0.033;
                positionRef.current.distanceY = (mouseY - currentY) * 0.033;

                if (
                    Math.abs(positionRef.current.distanceX) +
                        Math.abs(positionRef.current.distanceY) <
                    0.033
                ) {
                    positionRef.current.currentX = mouseX;
                    positionRef.current.currentY = mouseY;
                } else {
                    positionRef.current.currentX += distanceX;
                    positionRef.current.currentY += distanceY;
                }
            }

            secondaryCursor.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        };

        followMouse();
    }, []);

    return (
        <>
            <div className={styles.main_cursor} ref={mainCursor}></div>
            <div
                className={styles.secondary_cursor}
                ref={secondaryCursor}
            ></div>
        </>
    );
};

export default CustomCursor;
