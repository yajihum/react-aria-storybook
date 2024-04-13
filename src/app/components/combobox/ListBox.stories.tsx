import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { ListBox } from './ListBox';

const meta = {
  component: ListBox,
  title: 'components/combobox/ListBox',
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    options: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      name: `Option ${i}`,
    })),
  },
  render: ({ options }) => {
    return <ListBox aria-label='候補' options={options} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('option', { name: 'Option 0' }));
    await userEvent.keyboard('{arrowdown}');

    expect(canvas.getByRole('option', { name: 'Option 1' })).toHaveFocus();
    expect(canvas.getByRole('option', { name: 'Option 1' })).toHaveStyle({
      'border-top-width': '2px',
      'border-bottom-width': '2px',
    });
  },
} satisfies Story;
