import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/client/components/Form/Selection/SelectionButtonStory');
}

configure(loadStories, module);
