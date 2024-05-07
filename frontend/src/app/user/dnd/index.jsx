'use client';
import React, { FC, useState, useCallback } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import Grid from './Grid';
import SortableItem from './SortableItem';
import Item from './Item';

const generateId = () => Math.random().toString(36).slice(2, 9);

const WIREFRAME_ELEMENTS = {
    input: {
        ui: (ref) => (<div ref={ref}>
            <div className='h-5 w-16 bg-slate-600'></div>
        </div>)
    },
    button: {
        ui: (ref) => (<div ref={ref}>
            <div className='h-5 w-16 bg-slate-600'>
                <p>Click Me</p>
            </div>
        </div>)
    }
}

const currentWireframeElements = [WIREFRAME_ELEMENTS.input, WIREFRAME_ELEMENTS.button]

const DND = () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => (i + 1).toString()));
    console.log(Array.from({ length: 20 }, (_, i) => (i + 1).toString()));
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = useCallback((event) => {
        setActiveId(event.active.id);
    }, []);

    const initializeWireframe = () => {
        let wireframe = currentWireframeElements.map((element) => (
            { id: generateId(), ui: element.ui }
        ));
        console.log(wireframe);
        return wireframe;
    }

    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }, []);
    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <SortableContext items={items} strategy={rectSortingStrategy}>
                <Grid columns={5}>
                    {initializeWireframe().map(({ id, ui }) => (
                        <SortableItem itemUI={ui} key={id} id={id} />
                    ))}
                </Grid>
            </SortableContext>
            <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                {activeId ? <Item id={activeId} isDragging /> : null}
            </DragOverlay>
        </DndContext>
    );
};

export default DND;
