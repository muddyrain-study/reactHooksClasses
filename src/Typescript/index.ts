type Watcher<T> = {
  on<K extends string & keyof T>(
    event: `${K}Changed`,
    callback: (oldValue: T[K], newValue: T[K]) => void
  ): void;
};
declare function watch<T>(object: T): Watcher<T>;

const watcher = watch({
  firstName: 'muddy',
  lastName: 'rain',
  age: 20,
  sex: 'male',
  level: 2,
});

watcher.on('lastNameChanged', (oldValue, newValue) => {
  console.log(`${oldValue} to ${newValue}`);
});
