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

const WIREFRAME_ELEMENTS = [
    {
        name: 'Text',
        type: 'text',
    },
    {
        name: 'Image',
        type: 'image',
    },
    {
        name: 'Button',
        type: 'button',
    },
    {
        name: 'Input',
        type: 'input',
    },
    {
        name: 'Checkbox',
        type: 'checkbox',
    },
    {
        name: 'Radio',
        type: 'radio',
    },
    {
        name: 'Select',
        type: 'select',
    },
    {
        name: 'Textarea',
        type: 'textarea',
    },
    {
        name: 'Link',
        type: 'link',
    },
    {
        name: 'Icon',
        type: 'icon',
    },
    {
        name: 'Divider',
        type: 'divider',
    },
    {
        name: 'Grid',
        type: 'grid',
    },
    {
        name: 'Card',
        type: 'card',
    },
    {
        name: 'Modal',
        type: 'modal',
    },
    {
        name: 'Tabs',
        type: 'tabs',
    },
    {
        name: 'Accordion',
        type: 'accordion',
    },
    {
        name: 'Navbar',
        type: 'navbar',
    },
    {
        name: 'Sidebar',
        type: 'sidebar',
    },
    {
        name: 'Footer',
        type: 'footer',
    },
    {
        name: 'Alert',
        type: 'alert',
    },
    {
        name: 'Progress',
        type: 'progress',
    },
    {
        name: 'Spinner',
        type: 'spinner',
    },
    {
        name: 'Badge',
        type: 'badge',
    },
    {
        name: 'Avatar',
        type: 'avatar',
    },
    {
        name: 'List',
        type: 'list',
    },
    {
        name: 'Table',
        type: 'table',
    },
    {
        name: 'Pagination',
        type: 'pagination',
    }
]

const currentWireframeElements = [
    
]

const DND = () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => (i + 1).toString()));
    console.log(Array.from({ length: 20 }, (_, i) => (i + 1).toString()));
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = useCallback((event) => {
        setActiveId(event.active.id);
    }, []);

    const handleDragEnd = useCallback((event) => {
        console.log(event);
        const { active, over } = event;

        if (active.id !== over?.id) {
            console.log(over);
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
                    {items.map((id) => (
                        <SortableItem key={id} id={id} />
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