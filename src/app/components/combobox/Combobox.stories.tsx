import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Combobox } from './Combobox';

const meta = {
  component: Combobox,
  title: 'components/combobox/Combobox',
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    options: [
      { id: 1, name: 'Aardvark' },
      { id: 2, name: 'Cat' },
      { id: 3, name: 'Dog' },
      { id: 4, name: 'Kangaroo' },
      { id: 5, name: 'Panda' },
      { id: 6, name: 'Snake' },
      { id: 7, name: 'Tiger' },
      { id: 8, name: 'Zebra' },
      { id: 9, name: 'Elephant' },
      { id: 10, name: 'Giraffe' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);

    // comboboxにフォーカスが当たった時のスタイルを確認する
    await userEvent.tab();
    expect(canvas.getByRole('combobox')).toHaveFocus();
    expect(canvas.getByRole('group')).toHaveStyle({
      'outline-width': '2px',
      'outline-offset': '2px',
    });

    // optionを選択して値が変わることを確認する
    await userEvent.click(
      canvas.getByRole('button', { name: '候補を表示 Favorite Animal' }),
    );
    await userEvent.click(canvas.getByRole('option', { name: 'Cat' }));
    expect(canvas.getByRole('combobox')).toHaveValue('Cat');

    // typeして値が変わることを確認する
    await userEvent.clear(canvas.getByRole('combobox'));
    await userEvent.type(canvas.getByRole('combobox'), 'Dog');
    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{enter}');
    expect(canvas.getByRole('combobox')).toHaveValue('Dog');
  },
} satisfies Story;
