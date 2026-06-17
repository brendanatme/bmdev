import { clients } from '~/src/data'
import Frame from '~/src/base/frame'
import Title from '~/src/components/title'
import styles from './clients-frame.module.css'

const ClientsFrame = () => (
  <Frame>
    <Title>
      Clients &amp; <span className="sm:br" />
      Employers
    </Title>
    <div className="container p-6 text-white">
      <div className={`flex flex-wrap justify-evenly ${styles.clientsBlock}`}>
        {clients.map((client, i) => (
          <div
            className={`block m-1 md:m-5 relative z-10 ${styles.client} ${styles["client" + i]} flex flex-col rounded overflow-hidden`}
            key={`client${i}`}
          >
            <div
              className={`relative p-2 md:p-5 z-10 ${client.thumb.bg} ${client.thumb.op} flex-grow flex flex-col justify-center`}
            >
              <img
                alt={client.thumb.alt}
                className="z-10 flex-initial select-none"
                src={client.thumb.img}
                style={{ width: client.thumb.w }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Frame>
)

export default ClientsFrame
