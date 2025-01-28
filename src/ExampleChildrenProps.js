function BlogPost(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </>
  );
}

export default function ExampleChildrenProps() {
  return (
    <div>
      <BlogPost title="Hello UpLeveled">
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal"
          width={300}
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique. Lorem dolor sed viverra ipsum. Venenatis
          cras sed felis eget velit aliquet. Ullamcorper morbi tincidunt ornare
          massa eget. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique.
        </div>
      </BlogPost>
      <hr />
      <BlogPost title="I like React">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique. Lorem dolor sed viverra ipsum. Venenatis
          cras sed felis eget velit aliquet. Ullamcorper morbi tincidunt ornare
          massa eget. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique.
        </div>
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal"
          width={300}
        />
      </BlogPost>
      <hr />
      <BlogPost title="I like JavaScript">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique.{' '}
        </div>
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal"
          width={300}
        />
        <div>
          Lorem dolor sed viverra ipsum. Venenatis cras sed felis eget velit
          aliquet. Ullamcorper morbi tincidunt ornare massa eget. Sed egestas
          egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium. In fermentum et sollicitudin ac orci phasellus egestas
          tellus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque
          habitant morbi tristique.
        </div>
      </BlogPost>
    </div>
  );
}
