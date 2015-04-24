<?php
namespace App\Model\Table;

use App\Model\Entity\MapChange;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * MapChanges Model
 */
class MapChangesTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        $this->table('map_changes');
        $this->displayField('name');
        $this->primaryKey('id');
        $this->addBehavior('Timestamp');
        $this->belongsTo('Universes', [
            'foreignKey' => 'universe_id'
        ]);
        $this->belongsTo('Maps', [
            'foreignKey' => 'map_id'
        ]);
        $this->belongsTo('Events', [
            'foreignKey' => 'event_id'
        ]);
        $this->hasMany('MapChangeVersions', [
            'foreignKey' => 'map_change_id'
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
            ->requirePresence('name', 'create')
            ->notEmpty('name')
            ->allowEmpty('description')
            ->allowEmpty('image')
            ->allowEmpty('link')
            ->add('universe_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('universe_id', 'create')
            ->notEmpty('universe_id')
            ->add('map_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('map_id', 'create')
            ->notEmpty('map_id')
            ->add('event_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('event_id', 'create')
            ->notEmpty('event_id');

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
        $rules->add($rules->existsIn(['universe_id'], 'Universes'));
        $rules->add($rules->existsIn(['map_id'], 'Maps'));
        $rules->add($rules->existsIn(['event_id'], 'Events'));
        return $rules;
    }
}
