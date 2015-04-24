<?php
namespace App\Model\Table;

use App\Model\Entity\EventsPlace;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * EventsPlaces Model
 */
class EventsPlacesTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        $this->table('events_places');
        $this->displayField('id');
        $this->primaryKey('id');
        $this->belongsTo('Events', [
            'foreignKey' => 'event_id'
        ]);
        $this->belongsTo('Places', [
            'foreignKey' => 'place_id'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->add('id', 'valid', ['rule' => 'numeric'])
            ->allowEmpty('id', 'create')
            ->add('event_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('event_id', 'create')
            ->notEmpty('event_id')
            ->add('place_id', 'valid', ['rule' => 'numeric'])
            ->allowEmpty('place_id')
            ->allowEmpty('coordinations');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['event_id'], 'Events'));
        $rules->add($rules->existsIn(['place_id'], 'Places'));
        return $rules;
    }
}
