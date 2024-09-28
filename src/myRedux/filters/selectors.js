import { createSelector } from '@reduxjs/toolkit';
import { selectEventMembers } from '../events/selectors';

export const selectNameFilter = state => state.filters.name;

export const selectFilteredMembers = createSelector(
  [selectEventMembers, selectNameFilter],
  (items, filterName) =>
    items.filter(
      item =>
        item.name.toLowerCase().includes(filterName.toLowerCase().trim()) ||
        item.email.includes(filterName.toLowerCase().trim())
    )
);
